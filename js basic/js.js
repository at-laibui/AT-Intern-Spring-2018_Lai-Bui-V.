numb = 0;
url = "https://www.youtube.com/embed/nfs8NYg7yQM"
videosList = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/nfs8NYg7yQM'
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/o7iL2KzDh38'
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/CwfoyVa980U'
  },
  {
    id: 4,
    url: 'https://www.youtube.com/embed/Y4nRZfVnObg'
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/F5tS5m86bOI'
  },
]
function nextVideo() {
  if (numb == videosList.length - 1)
    numb = 0;
  else {
    numb++;
  }
  id = videosList[numb].id;
  url = videosList[numb].url;
  vd = document.getElementById("viID");
  vd.setAttribute("src", url);
  localStorage.setItem("myVideo", url);

}
function backVideo() {
  if (numb == 0)
    numb = videosList.length - 1;
  else {
    numb--;
  }
  id = videosList[numb].id;
  url = videosList[numb].url;
  vd = document.getElementById("viID");
  vd.setAttribute("src", url);
  localStorage.setItem("myVideo", url);
}
function initList() {
  url = localStorage.getItem("myVideo")||url;
  vd = document.getElementById("viID");
  vd.setAttribute("src", url);
  // tao li
  for (let i = 0; i < videosList.length; i++) {
    var divLi = document.createElement("li");
    document.getElementById("myList").appendChild(divLi);
  }
  // them thuoc tinh cho li
  for (let i = 0; i < videosList.length; i++) {
    itemLiv = document.getElementsByTagName("li")[i];
    var ifr = document.createElement("iframe");
    ifr.setAttribute("class", "video-item");
    ifr.setAttribute("src", videosList[i].url);
    itemLiv.appendChild(ifr);
    var p_title = document.createElement("p");
    var t = document.createTextNode("Video" + (i + 1));
    p_title.appendChild(t);
    p_title.setAttribute("id", "video" + i);
    itemLiv.appendChild(p_title);
  }
}
function initEventListener() {
  for (let i = 0; i < videosList.length; i++) {
    document.getElementById("video" + i).addEventListener("click", function () {
      id = videosList[i].id;
      url = videosList[i].url;
      numb = id-1;
      elm = document.getElementById("viID");
      elm.setAttribute("src", url);
      localStorage.setItem("myVideo", url);
    });
  }
}

initList();
initEventListener();
