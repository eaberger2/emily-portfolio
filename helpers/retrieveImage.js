const {imageName} = this.state;
let imageRef = firebase.storage().ref('/' + imageName);
imageRef
  .getDownloadURL()
  .then((url) => {
    //from url you can fetched the uploaded image easily
    this.setState({profileImageUrl: url});
  })
  .catch((e) => console.log('getting downloadURL of image error => ', e));