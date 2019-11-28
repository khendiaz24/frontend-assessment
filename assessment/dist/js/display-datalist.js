// Display Data List

var data_list = new Vue({
  el: '#data_list',
  data: {
    posts: [],
  },
  mounted() {
    axios.get('dist/js/data.json')
      .then(response => {
        this.posts = response.data
      }).catch(error => {
        console.log(error);
      });
  },
});

// Strip HTML tags from json data
Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});


