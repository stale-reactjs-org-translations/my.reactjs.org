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
>>>>>>> 5647a9485db3426d62b5a8203f4499c01bcd789b
