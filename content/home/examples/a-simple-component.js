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
>>>>>>> e9faee62db6981e26a1cdabad6ae39620a1d2e3e
