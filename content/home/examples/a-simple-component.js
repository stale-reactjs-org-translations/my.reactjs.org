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
>>>>>>> 1d21630e126af0f4c04ff392934dcee80fc54892
