import { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "",
        location: "",
        avatar_url: "",
        company: "",
        location: "",
        blog: "",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/Himanshu0599`);
    const json = await data.json();
    this.setState({
      userData: json,
    });
  }

  componentWillUnmount() {
    this.state = null;
  }

  render() {
    return (
      <div className="container">
        <div className="mx-10">
          <h1 className="text-2xl mt-10 font-bold border-bottom py-2 my-4 mx-10">
            About FoodAdda
          </h1>
          <p className="py-2 my-4 mx-10 align-text-top font-serif border-bottom">
            <strong>Experience the ultimate foodie adventure with Food-Adda.</strong><br/>
            Welcome to Food-Adda, your go-to destination for ordering delicious food from the comfort of your own home or office. 
            Our app is designed to make it easy for you to browse a wide variety of cuisines, place your order, and have it delivered right to your doorstep in no time.

            At Food-Adda, we believe that good food should be accessible to everyone, which is why we partner with the best local restaurants and 
            chefs in your area to bring you a diverse range of options to suit every taste and budget. Whether you're in the mood for a quick snack or a full course meal, 
            we've got you covered.
          </p>
        </div>
        <h1 className="text-2xl font-bold py-2 my-4 mx-20 mt-10 ">Developed By</h1>
        <div className="flex items-center">
          <div className="h-200 mx-20 mt-10 mb-10 lg:h-auto lg:w-48 content-center  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img src={this.state.userData.avatar_url} alt="user image" />
          </div>
          <div className="info">
            <h1 className="text-4xl font-bold">{this.state.userData.name}</h1>
            <h2 className="my-2">{this.state.userData.bio}</h2>
            <h2 className="my-2">{this.state.userData.company}</h2>
            <h2 className="my-2">{this.state.userData.location}</h2>
            <a
              target="_blank"
              href={this.state.userData.blog}
              className="my-2 text-xl"
            >
              {this.state.userData.blog}
            </a>
          </div>
        </div>
      </div>
    );
  }
}