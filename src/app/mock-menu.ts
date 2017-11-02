export const PAGES_MENU = [
     
    
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'dashboard',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
	  
	  
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Editors',
            icon: 'mode_edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'CKeditor',
				 path: 'ckeditor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'Components',
            icon: 'apps',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'timeline',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'charts',
            data: {
              menu: {
                title: 'Charts',
				path: 'charts',
				
				
				
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI',
            icon: 'picture_in_picture',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
				path: 'buttons',
              }
            }
          },
		  {
            path: 'card',
            data: {
              menu: {
                title: 'Card',
				 path: 'card',
              }
            }
          },
		   {
            path: 'checkbox',
            data: {
              menu: {
                title: 'Checkbox',
				path: 'checkbox',
              }
            }
          },
		   {
            path: 'chips',
            data: {
              menu: {
                title: 'Chips',
				 path: 'chips',
              }
            }
          },
		   
		   {
            path: 'dialog',
            data: {
              menu: {
                title: 'Dialog',
				path: 'dialog',
              }
            }
          },
		    {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
				 path: 'grid',
              }
            }
          },
		   {
            path: 'icons',
            data: {
              menu: {
                title: 'Icons',
				 path: 'icons',
              }
            }
          },
		  {
            path: 'progress_bar',
            data: {
              menu: {
                title: 'Progress Bar',
				path: 'progress_bar',
              }
            }
          },
		   {
            path: 'progress_spinner',
            data: {
              menu: {
                title: 'Progress Spinner',
				 path: 'progress_spinner',
              }
            }
          },
		  
		  
		  
		  {
            path: 'slider',
            data: {
              menu: {
                title: 'Slider',
				path: 'slider',
              }
            }
          },
		  
		  {
            path: 'ripple',
            data: {
              menu: {
                title: 'Ripple',
				path: 'ripple',
              }
            }
          },
		  {
            path: 'radio',
            data: {
              menu: {
                title: 'Radio Button',
				path: 'radio',
              }
            }
          },
		  {
            path: 'tabs',
            data: {
              menu: {
                title: 'Tabs',
				path: 'tabs',
              }
            }
          },
		  {
            path: 'tooltip',
            data: {
              menu: {
                title: 'Tooltip',
				path: 'tooltip',
              }
            }
          },
         {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
				path: 'typography',
              }
            }
          },
          
          
         
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Forms',
            icon: 'content_copy',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Inputs',
				 path: 'inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Layouts',
				 path: 'layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'content_paste',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
				 path: 'basictables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'location_on',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'maps',
            data: {
              menu: {
                title: 'Google Maps',
				 path: 'maps',
              }
            }
          }
        ]
      },
	  
	  {
        path: 'calender',
        data: {
          menu: {
            title: 'Calender',
            icon: 'date_range',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
	  
	  {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'dashboard',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
	  
	  
	  
	   
	   {
        path: 'pages',
        data: {
          menu: {
            title: 'Pages',
            icon: 'pages',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },	  
	   {
        path: 'notifications',
        data: {
          menu: {
            title: 'Notifications',
            icon: 'notifications',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
	   {
        path: 'Upgrade',
        data: {
          menu: {
            title: 'Upgrade',
            icon: 'date_range',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
   
  
];
