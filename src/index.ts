import 'bootstrap/dist/css/bootstrap.min.css';

import { dispatch, subscribe, getState } from './store';
import { addTodo, deleteTodo } from './slice';

subscribe(() => console.log('store = ', getState()));

dispatch(addTodo({ description: 'First todo' }));
dispatch(addTodo({}));
