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
    console.log("json json",json);
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
          <p>
          Experience the ultimate foodie adventure with Food-Adda.
          </p>
        </div>
        <h1 className="text-2xl font-bold py-2 my-6 mx-10">Developed By</h1>
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