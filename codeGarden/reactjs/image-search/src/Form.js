import React from 'react';
import API from './API';

class Form extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchTerm: '',
      loading: false,
      Images: []
    };

  }

 handleChange =  event => {
    
    this.setState({
      searchTerm : event.target.value,
      
    });

  }

  fetch = (e) => {
    e.preventDefault();
    this.setState({
      loading : true,
      Images: [ ]
      
      
    });

    API.search(this.state.searchTerm)
      .then(images => {

            this.setState({
              Images: images,
              loading: false,
            });

/*           this.state.Images.forEach(image =>{
            const imageSection = document.querySelector('section');
            const node = document.createElement('Img');
            node.src = image.image_url[0];
            imageSection.appendChild(node);
          )
          } */
        

        }
      );
     
  }
  render() {
      const {  searchTerm, loading, Images } = this.state;
    return (
      <React.Fragment>
        <h3> <span aria-label="jsx-a11y/accessible-emoji" role="img">🤡</span>{this.props.title} </h3> 
        <form onSubmit={this.fetch}>
              <label htmlFor="searchTerm">Search Term</label>
               <input 
               id="searchTerm"
               className="u-full-width"
               type="text" 
               onChange= {this.handleChange}
               value= {searchTerm} 
               name="searchTerm"
               
              />
              <button>Search</button>
        </form>

      {
         loading ? 
              
              <img src="https://cdn.dribbble.com/users/475723/screenshots/2666648/loading-animation.gif" alt="search" />
              : ''
              
              
      }
      <section id="images">    {Images.map(image => {
              return <img key={image.id} alt={image.description} src={image.image_url[0]} />
            })}</section> 
        </React.Fragment>


    );
  }
}

export default Form;


