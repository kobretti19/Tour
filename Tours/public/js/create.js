const createTour = async (
  name,
  difficulty,
  duration,
  price,
  summary,
  description,
  imageCover,
  images,
  createdAt
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/tours',
      data: {
        name,
        difficulty,
        duration,
        price,
        summary,
        description,
        imageCover,
        images,
        createdAt,
      },
    });
    console.log(res);
    //     window.location.assign('/tours/all');
  } catch (err) {
    console.log(err);
  }
};
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const difficulty = document.getElementById('difficulty').value;
  const duration = document.getElementById('duration').value;
  const price = document.getElementById('price').value;
  const summary = document.getElementById('summary').value;
  const description = document.getElementById('description').value;
  const imageCover = document.getElementById('image').files[0];
  const images = document.getElementById('images').value;
  const createdAt = document.getElementById('createdAt').value;
  createTour(
    name,
    difficulty,
    duration,
    price,
    summary,
    description,
    imageCover,
    images,
    createdAt
  );
});
