class HelloMessage extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <div>
        မင်္ဂလာပါ {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="မောင်မောင်" />,
  document.getElementById('hello-example')
);
=======
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
>>>>>>> e3073b03a5b9eff4ef12998841b9e56120f37e26
