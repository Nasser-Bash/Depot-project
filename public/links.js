export const links = [
    { name: 'Home', id:'1' ,mega:false ,dropdown : true , sublinks:[
    { name: 'Main Home', path: '/' , parent : '1'  },
    { name: 'Minimal Home', path: '/minimal-home' , parent : '1'  },
    { name: 'Masonry Home', path: '/masonry-home' , parent : '1'  },
    { name: 'Passepartout Home', path: '/passepartout-home' , parent : '1'  },
    { name: 'Product Showcase', path: '/product-showcase' , parent : '1'  },
    { name: 'Split Showcase', path: '/split-showcase' , parent : '1'  },
    ]
    },
    { name: 'Pages',id:'2',mega:false ,dropdown : true , sublinks:[
      { name: 'About Us', path: '/about-us' , parent : '2'  },
      { name: 'Contact Us', path: '/contact-us' , parent : '2'  },
      ]} ,
    { name: 'Shop' ,id:'3',mega:true ,dropdown : true , sublinks:[
      {
        head : 'Shop Types' , 
        sublink :[ 
        { name: 'Left Sidebar', path: '/shop', parent : '3' , isMega : true , col : 1},
        { name: 'With Filter', path: '/shop/with-filter', parent : '3' , isMega : true , col : 1},
        { name: 'Masonry Grid', path: '/shop/masonry-grid', parent : '3' , isMega : true , col : 1},
        ]
      },
      {
        head : 'Product Types' , 
        sublink :[ 
        { name: 'MINIMALISTIC CHAIR', path: '/products/1', parent : '3' , isMega : true , col : 2},
        { name: 'BASKET WITH HANDLES', path: '/products/2', parent : '3' , isMega : true , col : 2},
        { name: 'FLOWER VASE', path: '/products/3', parent : '3' , isMega : true , col : 2},
        { name: 'RETRO LAMP', path: '/products/4', parent : '3' , isMega : true , col : 2},
        { name: 'ROSE HOLDBACK', path: '/products/7', parent : '3' , isMega : true , col : 2},
        { name: 'TABLE LAMP', path: '/products/9', parent : '3' , isMega : true , col : 2},
        ]
      },
      {
        head : 'Featured' , 
        sublink :[ 
        { name: 'User Dashboard', path: '/user-dashboard', parent : '3' , isMega : true , col : 3},
        { name: 'My Account', path: '/my-account', parent : '3' , isMega : true , col : 3},
        { name: 'Cart', path: '/cart', parent : '3' , isMega : true , col : 3},
        { name: 'Wishlist', path: '/wish-list', parent : '3' , isMega : true , col : 3},
        ]
      },
      {
        head : 'Layouts' , 
        sublink :[ 
        { name: 'Two Columns Grid', path: '/shop/two-columns-grid', parent : '3' , isMega : true , col : 4},
        { name: 'Three Columns Grid', path: '/shop/three-columns-grid', parent : '3' , isMega : true , col : 4},
        { name: 'Four Columns Grid', path: '/shop/four-columns-grid', parent : '3' , isMega : true , col : 4},
        { name: 'Five Columns Grid', path: '/shop/five-columns-grid', parent : '3' , isMega : true , col : 4}
        ]
      },
  ]},
  ]
