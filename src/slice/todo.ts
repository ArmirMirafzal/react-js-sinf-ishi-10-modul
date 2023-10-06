import { produce } from 'immer';
import { IStore, Todo } from '../types';
import { faker } from '@faker-js/faker';
import { Reducer } from 'redux';

// ACTIONS
enum ACTION {
  'ADD' = 'todo/add',
  'EDIT' = 'todo/edit',
  'DELETE' = 'todo/delete',
  'TOGGLE' = 'todo/toggle'
}

interface AddTodo {
  type: ACTION.ADD;
  payload: Pick<Todo, 'description'>;
}

interface DeleteTodo {
  type: ACTION.DELETE;
  payload: Pick<Todo, 'id'>;
}

interface EditTodo {
  type: ACTION.EDIT;
  payload: Pick<Todo, 'id' | 'description'>;
}

interface ToggleTodo {
  type: ACTION.TOGGLE;
  payload: Pick<Todo, 'id'>;
}

type Action = AddTodo | DeleteTodo | EditTodo | ToggleTodo;

// REDUCER
export const reducer: Reducer<IStore.TodoState, Action> = (state = { list: [] }, action) => {
  switch (action.type) {
    case ACTION.ADD:
      return produce(state, diff => {
        const todo = {
          id: faker.string.uuid(),
          completed: false,
          description: action.payload.description
        };
        diff.list.push(todo);
      });

    case ACTION.DELETE:
      return produce(state, diff => {
        const todoIdx = diff.list.findIndex(todo => todo.id === action.payload.id);
        diff.list.splice(todoIdx, 1);
      });

    case ACTION.EDIT:
      return produce(state, diff => {
        const todoIdx = diff.list.findIndex(todo => todo.id === action.payload.id);
        diff.list[todoIdx].description = action.payload.description;
      });

    case ACTION.TOGGLE:
      return produce(state, diff => {
        const todoIdx = diff.list.findIndex(todo => todo.id === action.payload.id);
        diff.list[todoIdx].completed = !diff.list[todoIdx].completed;
      });

    default:
      return state;
  }
};



// ACTION CREATORS
export const addTodo = (payload: AddTodo['payload']) => ({ type: ACTION.ADD, payload });
export const editTodo = (payload: EditTodo['payload']) => ({ type: ACTION.EDIT, payload });
export const deleteTodo = (payload: DeleteTodo['payload']) => ({ type: ACTION.DELETE, payload });
export const toggleTodo = (payload: ToggleTodo['payload']) => ({ type: ACTION.TOGGLE, payload });
