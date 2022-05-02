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
>>>>>>> 5f3a9756e00e256735a5f52df19b403d8fdd3a9d
