import React from 'react';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import Todo from '../src/Todos/Todo';

test('renders todo', () => {
    const todo = {
        text: 'test todo',
        done: false
    }

    render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

    const elem = screen.getByText('test todo');
    expect(elem).toBeDefined();
})