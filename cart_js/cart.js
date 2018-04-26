var arrayList = [
  {
    id: 1,
    title: 'Item 1',
    image: 'https://vn-test-11.slatic.net/p/8/dong-ho-day-da-nam-chong-nuoc-hamama-wl01-6046-8883816-436350260f2ebdbd8ff9dace0edf5afe-catalog_233.jpg',
  },
  {
    id: 2,
    title: 'Item 2',
    image: 'https://vn-test-11.slatic.net/p/8/dong-ho-nam-platrium-phong-cach-hien-dai-den-7469-59847572-93af8f6c4c4b0aa6caf3e97d93478670-catalog_233.jpg',
  },
  {
    id: 3,
    title: 'Item 3',
    image: 'https://vn-test-11.slatic.net/p/8/dong-ho-nam-day-thep-ma-vang-mat-rong-baishuns-bas11002-mat-trang-8485-3164222-f1342ce20dd54ff272fa3e3cbba70bf1-catalog_233.jpg',
  },
  {
    id: 4,
    title: 'Item 4',
    image: 'https://vn-test-11.slatic.net/p/8/dong-ho-nam-wwoor-8018-full-box-may-mong-day-thep-khong-gi-den-8523-0958474-49a18349efdbf028661523ddcafbbd5f-catalog_233.jpg',
  },
  {
    id: 5,
    title: 'Item 5',
    image: 'https://vn-test-11.slatic.net/p/8/dong-ho-led-the-thao-chong-nuoc-loai-mat-kieng-chu-nhat-0283-09928391-9558c4fdf596ba7e6b1f2c3e7633e855-catalog_233.jpg',
  },
  {
    id: 6,
    title: 'Item 6',
    image: 'https://vn-test-11.slatic.net/p/8/dong-ho-nam-nibosi-1985-day-da-tron-chay-6-kim-mdl-1985l-full-box-1974-94559951-3c962be27f885201b51d88e8e8edce57-catalog_233.jpg',
  },
  {
    id: 7,
    title: 'Item 7',
    image: 'https://vn-test-11.slatic.net/p/8/dong-ho-nam-day-da-nau-mat-xanh-den-tang-dong-ho-day-da-den-3117-33795951-061b3af5e175c0684831233f4788ff21-catalog_233.jpg',
  },
  {
    id: 8,
    title: 'Item 8',
    image: 'https://vn-test-11.slatic.net/p/8/dong-ho-chay-co-automatic-nam-day-thep-thuong-hieu-tevise-cao-cap-golden-watch-day-demi-mat-trang-3387-08049012-52ace2e7145fcb338820f7bcc3a1d108-catalog_233.jpg',
  }
]
let index = 0;
let productList = document.getElementById('js-product-list');
let cartTable = document.getElementById('table-cart');
const productInCart = 'productInCart';
function changeProductNumber() {
  let arr = getDataFromStore(productInCart);
  if (arr) {
    return arr.length;
  }
  return 0;
}

function getDataFromStore(keyItem) {
  if (localStorage.getItem(keyItem)) {
    return JSON.parse(localStorage.getItem(keyItem));
  }
  return [];
} 

function hanldeCart() {
  if (getDataFromStore(productInCart)) {
    document.getElementsByClassName('cart-product-number')[0].innerHTML = changeProductNumber();
  }
  document.getElementById('cart').addEventListener('click',
    function changePageLocation() {
      location.href = './cart.html';
    }
  );
}
 //JS FOR NEW PRODUCT
function onloadNewProduct() {
  hanldeCart();
  arrayList.map(function(item) {
    let productItem = document.createElement('li');
    productItem.setAttribute('class', 'product-item');
    productList.appendChild(productItem);

    let productWrapper = document.createElement('div');
    productWrapper.setAttribute('class', 'product-wrapper d-flex');
    productItem.appendChild(productWrapper);

    let productImage = document.createElement('img');
    productImage.setAttribute('src', item.image);
    productWrapper.appendChild(productImage);

    let productTitle = document.createElement('span');
    productTitle.setAttribute('class', 'product-title');
    productTitle.innerHTML = item.title;
    productWrapper.appendChild(productTitle);

    let addCartButton = document.createElement('button');
    addCartButton.setAttribute('id', 'js-add-cart-button-' + item.id);
    addCartButton.setAttribute('class', 'btn btn-primary');
    addCartButton.innerHTML = 'Add To Cart';
    addCartButton.onclick = function() {
      handleClickAddCartBtn(item);
    }
    productWrapper.appendChild(addCartButton);
  })

  function checkDisabledButton() {
    let tempArr = [];
    getDataFromStore(productInCart).map(function(object) {
      tempArr.push(object.id);
    });
    arrayList.map(function(item) {
      if (tempArr.includes(item.id)) {
        document.getElementById('js-add-cart-button-' + item.id).setAttribute('disabled', '');
      }
    });
  }

  checkDisabledButton();
  
  function handleClickAddCartBtn(item) {
    let productInCartArr = [];
    productInCartArr = getDataFromStore(productInCart);
    let confirmAdd = confirm('Do you want to add ' + item.title + ' to your cart?' );
    if (confirmAdd === true) {
      productInCartArr.push(item);
      localStorage.setItem(productInCart, JSON.stringify(productInCartArr));
      checkDisabledButton();
      hanldeCart();
    }
  }
}
                                                  // JS FOR CART

function onloadCart() {
  let number = 0;
  let arr = getDataFromStore(productInCart);
  hanldeCart();
  arr.map(function(object) {
    let tr = document.createElement('tr');
    let tdID = document.createElement('td');
    tdID.innerHTML = number += 1;
    tr.appendChild(tdID);

    let tdTitle = document.createElement('td');
    tdTitle.innerHTML = object.title;
    tr.appendChild(tdTitle);

    let tdQuantity = document.createElement('td');
    tdQuantity.innerHTML = 1;
    tr.appendChild(tdQuantity);

    let tdAction = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', "delete-btn-" + object.id);
    deleteProduct(deleteBtn, arr, object);
    deleteBtn.innerHTML = "Delete";
    tdAction.appendChild(deleteBtn);
    tr.appendChild(tdAction);
    cartTable.appendChild(tr);
  })
  function deleteProduct(btn, array, item) {
    btn.addEventListener('click',
      function handleClickDeleteBtn() {
        index = array.findIndex(value => value.id == item.id);
        let confirmDelete = confirm('Do you want to delete this product?');
        if (confirmDelete === true) {
          array.splice(index, 1);
          localStorage.setItem(productInCart, JSON.stringify(array));
          location.reload();
        }
      }
    )
  }
}