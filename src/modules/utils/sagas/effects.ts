import {Action} from 'redux';
import {
  ActionPattern,
  call,
  cancel,
  fork,
  HelperWorkerParameters,
  take,
} from 'redux-saga/effects';

export function takeLatestEveryUnique<
  A extends Action,
  Fn extends (...args: any[]) => any,
>(
  patternOrChannel: ActionPattern,
  worker: Fn,
  ...params: HelperWorkerParameters<A, Fn>
) {
  return fork(function* () {
    const tasksSet = new Map();

    while (true) {
      // @ts-ignore
      const action = yield take(patternOrChannel);
      const {id} = action;

      if (tasksSet.has(id)) {
        yield cancel(tasksSet.get(id)); // cancel is no-op if the task has already terminated
        tasksSet.delete(id);
      }

      const task = yield fork<Fn>(
        worker,
        ...(params.concat(action) as Parameters<Fn>),
      );

      tasksSet.set(id, task);
    }
  });
}

export function takeLeadingEveryUnique<
  A extends Action,
  Fn extends (...args: any[]) => any,
>(
  patternOrChannel: ActionPattern,
  worker: Fn,
  ...params: HelperWorkerParameters<A, Fn>
) {
  return fork(function* () {
    const tasksSet = new Map();

    while (true) {
      // @ts-ignore
      const action = yield take(patternOrChannel);
      const {id} = action;
      if (!tasksSet.has(id)) {
        yield fork(function* () {
          tasksSet.set(id, true);
          yield call<Fn>(worker, ...(params.concat(action) as Parameters<Fn>));
          tasksSet.delete(id);
        });
      }
    }
  });
}
