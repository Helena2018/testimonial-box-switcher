const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 
      'https://randomuser.me/api/portraits/women/65.jpg',
    text: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam vitae molestias amet eos placeat maxime laborum consequuntur. Laudantium nostrum fugit modi qui, ex, reprehenderit alias illum harum molestias nobis provident sed officia? Quidem nemo maiores, quia magni minus corrupti eligendi aut, velit, aliquid explicabo quisquam natus quam saepe mollitia.'
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 
      'https://randomuser.me/api/portraits/men/65.jpg',
    text: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam vitae molestias amet eos placeat maxime laborum consequuntur. Laudantium nostrum fugit modi qui, ex, reprehenderit alias illum harum molestias nobis provident sed officia? Quidem nemo maiores, quia magni minus corrupti eligendi aut, velit, aliquid explicabo quisquam natus quam saepe mollitia.'
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 
      'https://randomuser.me/api/portraits/women/67.jpg',
    text: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam vitae molestias amet eos placeat maxime laborum consequuntur. Laudantium nostrum fugit modi qui, ex, reprehenderit alias illum harum molestias nobis provident sed officia? Quidem nemo maiores, quia magni minus corrupti eligendi aut, velit, aliquid explicabo quisquam natus quam saepe mollitia.'
  },
  {
    name: 'Renee Sims',
    position: 'Receptionst',
    photo: 
      'https://randomuser.me/api/portraits/women/69.jpg',
    text: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam vitae molestias amet eos placeat maxime laborum consequuntur. Laudantium nostrum fugit modi qui, ex, reprehenderit alias illum harum molestias nobis provident sed officia? Quidem nemo maiores, quia magni minus corrupti eligendi aut, velit, aliquid explicabo quisquam natus quam saepe mollitia.'
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 
      'https://randomuser.me/api/portraits/men/37.jpg',
    text: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam vitae molestias amet eos placeat maxime laborum consequuntur. Laudantium nostrum fugit modi qui, ex, reprehenderit alias illum harum molestias nobis provident sed officia? Quidem nemo maiores, quia magni minus corrupti eligendi aut, velit, aliquid explicabo quisquam natus quam saepe mollitia.'
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo: 
      'https://randomuser.me/api/portraits/women/47.jpg',
    text: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam vitae molestias amet eos placeat maxime laborum consequuntur. Laudantium nostrum fugit modi qui, ex, reprehenderit alias illum harum molestias nobis provident sed officia? Quidem nemo maiores, quia magni minus corrupti eligendi aut, velit, aliquid explicabo quisquam natus quam saepe mollitia.'
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 
      'https://randomuser.me/api/portraits/men/87.jpg',
    text: 
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam vitae molestias amet eos placeat maxime laborum consequuntur. Laudantium nostrum fugit modi qui, ex, reprehenderit alias illum harum molestias nobis provident sed officia? Quidem nemo maiores, quia magni minus corrupti eligendi aut, velit, aliquid explicabo quisquam natus quam saepe mollitia.'
  },
]

let idx = 1

function updateTestimonial() {
  const {name, position, photo, text} = testimonials[idx]

  testimonial.innerHTML = text
  userImage.url = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if(idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)