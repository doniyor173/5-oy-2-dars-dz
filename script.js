const style = document.createElement('style');
style.textContent = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    color: #fff;
  }

  .card {
    background-color: #1f1f1f;
    padding: 30px;
    border-radius: 15px;
    width: 300px;
    text-align: center;
  }

  .profile-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .name {
    font-size: 1.2em;
    font-weight: 700;
  }

 .location {
  color: #c4f82a;
  font-weight: bold;
  text-align: center;
  margin-top: 8px;
}



  .bio {
    font-size: 0.9em;
    color: #ccc;
    margin-bottom: 20px;
  }

  .link-button {
    display: block;
    width: 100%;
    background-color: #333;
    padding: 10px;
    margin: 8px 0;
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
  }
`;
document.head.appendChild(style);


const card = document.createElement('div');
card.className = 'card';


const img = document.createElement('img');
img.src = './image/qiz.png'; 
img.alt = 'Jessica Randall';
img.className = 'profile-img';

const name = document.createElement('div');
name.className = 'name';
name.textContent = 'Jessica Randall';

const userLocation = document.createElement('div');
userLocation.className = 'location';
userLocation.textContent = 'London, United Kingdom';

const bio = document.createElement('div');
bio.className = 'bio';
bio.textContent = 'Front-end developer and avid reader.';


const links = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'];

links.forEach(text => {
  const btn = document.createElement('button');
  btn.className = 'link-button';
  btn.textContent = text;

  card.appendChild(btn);
});


card.prepend(img, name, userLocation, bio);


document.body.appendChild(card);
  