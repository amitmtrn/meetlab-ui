import { flows, actions } from '@codeinkit/flows-client';

const socket = new WebSocket('ws://localhost:5000', 'cik-flows-protocol');

flows.register('get_posts', [() =>({posts:[{content:'dadadadta', comments:[]}]})]);
// flows.register('get_posts', [actions.ask_server(socket, 'get_posts')]);
flows.register('add_post', [actions.ask_server(socket, 'add_post')]);
flows.register('add_comment', [actions.ask_server(socket, 'add_comment')]);
flows.register('register', [actions.ask_server(socket, 'register'), (data) => {window.localStorage.setItem('token', data.token)}]);
flows.register('login', [actions.ask_server(socket, 'login'), (data) => {window.localStorage.setItem('token', data.token)}]);