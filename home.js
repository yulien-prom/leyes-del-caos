$(function() {
	// Add random image a thumbnails
	var $thumbnail = $('.thumbnail');
	$thumbnail.each(function(index) {
		if($(this).attr('src') == '')
		$(this).attr('src', '//source.unsplash.com/category/technology/500x290/?sig=' + Math.random());	
	});
	/* 
		PORTAFOLIO
	*/
	let appPortafolio = new Vue({
		el: '#',
		delimiters: ['[[', ']]'],
		data: {
			NUM_RESULTS: 10,
			pag: 1,
			portfolioFilter: 'all',
			items: [],
			lastItem: false,
      activeDetail: undefined,
        showGrid: true,
        fullvideo: false
		},
		mounted: function () {
			// Get data
			this.$http.get(window.url_static + '/api/portafolio.json').then(response => {
                // Get all posts
				appPortafolio.items = response.body;
            }, response => {
                // error callback
                console.error('Error al cargar el portafolio');
            });
		},
      filters: {
          dateFormat: function (date) {
              return date.split('-').reverse().join('/');
          }   
      },
		watch: {
			portfolioFilter: function () {
				this.pag = 1;
			}
		},
		computed: {
			itemsView: function () {
				// Get items from category
				let itemsCategory = this.items.filter(function (item) {
					  return item.category == appPortafolio.portfolioFilter || appPortafolio.portfolioFilter == 'all';
				});
				// Slice array with pag
				let start = (this.pag - 1) * this.NUM_RESULTS;
				let end = start + this.NUM_RESULTS;
				// Check is last pag
				if (end + 1 > itemsCategory.length) {
					this.lastItem = true;
				} else {
					this.lastItem = false;
				}
				return itemsCategory.slice(start, end);
			},
        itemsViewUp: function () {
            return this.itemsView.splice(0, 3);
        },
        itemsViewMiddle: function () {
            return this.itemsView.splice(0, 4);
        },
        itemsViewDown: function () {
            return this.itemsView.splice(0, 3);
        },
        itemsRows: function () {
            return [this.itemsViewUp, this.itemsViewMiddle, this.itemsViewDown];
        },
        isMobile: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
        }
		},
		methods: {
			addActive: (event) => {
				let $navFilters = document.querySelectorAll('#portfolio .filter li');
				// Remove alls active class
				for(let link of $navFilters) {
					link.classList.remove('active');
				}
				// Add active class
				event.target.parentNode.classList.add('active');
				// Reset page
				this.pag = 1;
			},
			backPag: () => {
				this.pag -= 1;
			},
			nextPag: () => {
				this.pag += 1;
			},
        redirectMobile: function (newUrl) {
            if (this.isMobile) window.location = newUrl;
        },
        toggleGrid: function() {
            setTimeout(function () {
                appPortafolio.showGrid = !appPortafolio.showGrid; 
            }, 500);
        },
        showDetail: function (item) {
            appPortafolio.activeDetail = item;
            appPortafolio.toggleGrid();
        },
        closeDetail: function () {
            appPortafolio.fullvideo = false;
            appPortafolio.activeDetail = undefined;
            appPortafolio.toggleGrid();
        }
		}
	});
	/* 
		CONTACT
	*/
	function validateEmail (email) {
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	new Vue({
  		el: '#contact',
  		data: {
			disclaimer: false,
			name: '',
			helpName: false,
			email: '',
			helpEmail: false,
			subject: '',
			message: '',
			helpMessage: '',
			loading: false,
			send: false,
			error: false
		},
		methods: {
			checkName: function () {
				if(this.name.length < 7) {
					this.helpName = true;
				} else {
					this.helpName = false;
				}
			},
			checkEmail: function () {
				this.helpEmail = !validateEmail(this.email);
			},
			checkMessage: function () {
				if(this.message.length < 30) {
					this.helpMessage = true;
				} else {
					this.helpMessage = false;
				}
			},
			sendForm: function () {
				this.loading = true;
				this.$http.post('https://email.duartedvictor@gmail.com/api/v1/email/', {
					name: this.name,
					subject: this.subject,
					email: this.email,
					message: this.message
				}).then(response => {
					// State
					this.loading = false;
					this.send = true;
					// Data
					this.name = '';
					this.subject = '';
					this.email = '';
					this.message = '';
				}, response => {
					// error callback
					this.loading = false;
					this.error = true;
				});
			}
		}
	});
	/////////////////////////////////////////////////////////////////
	// Animate scroll
	/////////////////////////////////////////////////////////////////
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});


