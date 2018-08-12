import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, EmailField } from 'react-admin';
import TodoField from './TodoField';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TodoField source="username" label="To Do"/>
            <EmailField source="email" />
        </Datagrid>
    </List>
);