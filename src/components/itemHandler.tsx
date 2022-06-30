import { useState } from 'react';

import '../assets/styles/pages/itemHandler/itemHandler.css';
import SelectInput from './selectInput';

interface ItemsInterface {
  label: string,
  value: string,
  selected?: boolean,
  disabled?: boolean
}

export default function ItemHandler() {
  const [itemInput, setItemInput] = useState<string>('');
  const [handleItemSelected, setHandleItemSelected] = useState();
  const [items, setItems] = useState<ItemsInterface[]>([{
    'label': 'selecione uma opção',
    'value': '',
    'selected': true,
    'disabled': true
  }]);


  function verifyEmpty() {
    if (itemInput === '' || itemInput === undefined || itemInput === null) {
      return alert('por favor, insira um item na caixa de texto.');
    } else {
      return verifyExisting();
    }
  }

  function verifyExisting() {
    for (let item of items) {
      if (item.value == itemInput) {
        return alert('Este item já existe, por favor, insira um novo.');
      }
    }
    return addItem();
  }

  const addItem = () => {
    setItems([...items, { 'label': itemInput, 'value': itemInput, 'selected': false }]);
    alert('Item adicionado com sucesso!')
    return setItemInput('');
  }


  const removeItem = () => {
    let arrayPivot: ItemsInterface[] = [];
    items.filter(item => item.value !== itemInput).map(filtereditem => {
      arrayPivot.push(filtereditem);
    });

    if (arrayPivot.length === items.length) {
      return alert('por favor, insira um item existente na caixa de texto para remover.');
    }

    setItems(arrayPivot);
    alert('Item removido com sucesso!')
    return setItemInput('');
  }


  return (
    <>
      <div className='itemHandler-container'>
        <div className='content margin-vertical-10'>
          <SelectInput
            items={items}
          />
          <input
            value={itemInput}
            title='insira um item'
            onChange={(event) => setItemInput(event.target.value)}
            className="input-primary"
            type='text'
            required={true}
            placeholder="insira um item"
          />

          <div className='row margin-horizontal-10'>
            <button onClick={() => verifyEmpty()}> Adicionar </button>
            <button onClick={() => removeItem()}> Remover </button>
            <button onClick={() => setItemInput('')}> Limpar Caixa </button>
          </div>
        </div>
      </div>
    </>
  )
};