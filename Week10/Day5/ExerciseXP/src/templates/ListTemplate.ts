import FullList from '../model/FullList';

export default class ListTemplate {

  private ul: HTMLUListElement;

  private constructor() {
    this.ul = document.getElementById('list') as HTMLUListElement;
  }

  renderList(fullList: FullList) {
    this.ul.innerHTML = '';
    fullList.getList().forEach(item => {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item.checked;
      checkbox.addEventListener('change', () => {
        item.checked = checkbox.checked;
        fullList.saveList();
      });

      const label = document.createElement('label');
      label.textContent = item.item;

      const deleteItem = document.createElement('button');
      deleteItem.textContent = 'X';
      deleteItem.addEventListener('click', () => {
        fullList.removeItem(item.id);
        this.renderList(fullList);
      });

      li.append(checkbox, label, deleteItem);
      this.ul.append(li);
    });
  }
}