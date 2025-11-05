import { TodoNavigatoin } from './TodoNavigation';

import { Status } from '../types/StatusEnum';
import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  status: Status;
  activeTodos: Todo[];
  isOneCompletedTodo: boolean;
  onSwitch: (status: Status) => void;
  onDeleteCompletedTodos: () => void;
};

export const TodoFooter: React.FC<Props> = ({
  status,
  activeTodos,
  isOneCompletedTodo,
  onSwitch,
  onDeleteCompletedTodos,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos.length} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <TodoNavigatoin status={status} onSwitch={onSwitch} />

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={isOneCompletedTodo}
        onClick={onDeleteCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
};
