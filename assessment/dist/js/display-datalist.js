// Display Data List

// Tab
var tab_list = new Vue({
  el: '.tab_list',
  data: {
    posts: [],
    isActive: false
  },
  mounted() {
    axios.get('dist/js/data.json')
      .then(response => {
        this.posts = response.data
      }).catch(error => {
        console.log(error);
      });
  },
  methods: {
    method_1: function(ev, i){
      this.isActive = !this.isActive;
      
      $('.tab__header').removeClass('active');
      $('.tab__header').eq(i).addClass('active');

      $('.tab__content').removeClass('active');
      $('.tab__content').eq(i).addClass('active');
    }
  }
});

// Accordion
var accordion = new Vue({
  el: '.accordion',
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
  methods: {
    method_2: function(ev, i){
      var _this = $('.accordion__list');
      if(_this.eq(i).hasClass('active')) {
        _this.eq(i).toggleClass('active');
      } else {
        $('.accordion__list').removeClass('active');
        _this.eq(i).addClass('active');
      };
    }
  },
  
});




