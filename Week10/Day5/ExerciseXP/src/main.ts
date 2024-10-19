import './style.css'
import FullList from './model/FullList';
import ListTemplate from './templates/ListTemplate';
import { ListItem } from './model/ListItem';
import './style.css';

const fullList = new FullList();
const listTemplate = new ListTemplate();

const form = document.getElementById('entryForm') as HTMLFormElement;
const input = document.getElementById('newItem') as HTMLInputElement;
const clearButton = document.getElementById('clearAll') as HTMLButtonElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const newItem = new ListItem(input.value, input.value, false);
  fullList.addItem(newItem);
  input.value = '';
  listTemplate.renderList(fullList);
});

clearButton.addEventListener('click', () => {
  fullList.clearList();
  listTemplate.renderList(fullList);
});

window.addEventListener('DOMContentLoaded', () => {
  fullList.loadList();
  listTemplate.renderList(fullList);
});

