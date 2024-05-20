const myArray = [];
      function add()
      {
        const list = document.querySelector('.js-todo');
        let name = list.value;
        const date = document.querySelector('.js-date').value;
        myArray.push({
          name:name,
          date:date
        });
         // Fetch date value only once
        display();
        list.value = '';
        date = document.querySelector('.js-date').value = '';
      }

      function display()
      {
        let todohtml = '';
        for(let i=0;i<myArray.length;i++)
        {
          const todoObject = myArray[i];
          const todoname = todoObject.name; 
          const tododate = todoObject.date; 
          const html = 
          `<div>${todoname}</div>
          <div>${tododate}</div>
          <button onclick=
            "myArray.splice(${i},1);
              display();" class="delete-button">
            Delete
          </button>`;
          todohtml += html;
        }
        document.querySelector('.js-display').innerHTML = todohtml;
      }