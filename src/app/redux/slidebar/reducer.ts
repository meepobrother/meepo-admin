import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as actions from './action';
const menus = [
    {
        title: 'MAIN NAVIGATION',
        children: [
            {
                title: 'Dashboard',
                icon: 'fa fa-dashboard',
                active: true,
                label: [],
                children: [
                    {
                        title: 'Dashboard v1',
                        icon: 'fa fa-circle-o',
                        active: true,
                        link: ['/']
                    },
                    {
                        title: 'Dashboard v2',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/v2']
                    }
                ]
            },
            {
                title: 'Layout Options',
                icon: 'fa fa-files-o',
                active: false,
                label: [{
                    title: '4',
                    class: 'label label-primary pull-right'
                }],
                children: [
                    {
                        title: 'Top Navigation',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['']
                    },
                    {
                        title: 'Boxed',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['']
                    },
                    {
                        title: 'Fixed',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['']
                    },
                    {
                        title: 'Collapsed Sidebar',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['']
                    }
                ]
            },
            {
                title: 'Widgets',
                label: [{
                    title: 'new',
                    class: 'label pull-right bg-green'
                }],
                active: false,
                icon: 'fa fa-th',
                children: [],
                link: ['/','widgets']
            },
            {
                title: 'Charts',
                icon: 'fa fa-pie-chart',
                active: false,
                children: [
                    {
                        title: 'ChartJS',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','charts','chartjs']
                    },
                    {
                        title: 'Morris',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','charts','morris']
                    },
                    {
                        title: 'Flot',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','charts','flot']
                    },
                    {
                        title: 'Inline charts',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','charts','inline-charts']
                    }
                ]
            },
            {
                title: 'UI Elements',
                icon: 'fa fa-laptop',
                active: false,
                children: [
                    {
                        title: 'General',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','ui','general']
                    },
                    {
                        title: 'Icons',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','ui','icons']
                    },
                    {
                        title: 'Buttons',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','ui','buttons']
                    },
                    {
                        title: 'Sliders',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','ui','sliders']
                    },
                    {
                        title: 'Timeline',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','ui','timeline']
                    },
                    {
                        title: 'Modals',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','ui','modals']
                    }
                ]
            },
            {
                title: 'Forms',
                icon: 'fa fa-edit',
                active: false,
                children: [
                    {
                        title: 'General Elements',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','forms','general']
                    },
                    {
                        title: 'Advanced Elements',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','forms','advanced']                    
                    },
                    {
                        title: 'Editors',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/','forms','editors']
                    }
                ]
            },
            {
                title: 'Tables',
                active: false,
                icon: 'fa fa-table',
                children: [
                    {
                        title: 'Simple tables',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/tables/simple']
                    },
                    {
                        title: 'Data tables',
                        icon: 'fa fa-circle-o',
                        active: false,
                        link: ['/tables/data']
                    }
                ]
            },
            {
                title: 'Calendar',
                active: false,
                icon: 'fa fa-calendar',
                children: [],
                label: [
                    {
                        title: '3',
                        class: 'label pull-right bg-red'
                    },
                    {
                        title: '7',
                        class: 'label pull-right bg-blue'
                    }
                ]
            },
            {
                title: 'Mailbox',
                active: false,
                icon: 'fa fa-envelope',
                children: [],
                label: [
                    {
                        title: '12',
                        class: 'label pull-right bg-yellow'
                    },
                    {
                        title: '6',
                        class: 'label pull-right bg-green'
                    },
                    {
                        title: '5',
                        class: 'label pull-right bg-red'
                    }
                ]
            },
            {
                title: 'Examples',
                active: false,
                icon: 'fa fa-folder',
                children: [
                    {
                        title: 'Invoice',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: 'Profile',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: 'Login',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: 'Register',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: 'Lockscreen',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: '404 Error',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: '500 Error',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: 'Blank Page',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: 'Pace Page',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                ],
                label: []
            },
            {
                title: 'Multilevel',
                icon: 'fa fa-share',
                active: false,
                children: [
                    {
                        title: 'Level One',
                        icon: 'fa fa-circle-o',
                        active: false
                    },
                    {
                        title: 'Level One',
                        icon: 'fa fa-circle-o',
                        active: false,
                        children: [
                            {
                                title: 'Level Two',
                                icon: 'fa fa-circle-o',
                                active: false,
                                children: [
                                    {
                                        title: 'Level Three',
                                        icon: 'fa fa-circle-o',
                                        active: false
                                    },
                                    {
                                        title: 'Level Three',
                                        icon: 'fa fa-circle-o',
                                        active: false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Level One',
                        icon: 'fa fa-circle-o',
                        active: false
                    }
                ],
                label: []
            },
            {
                title: 'Documentation',
                icon: 'fa fa-book',
                active: false,
                label: [],
                children: [
        
                ]
            }
        ]
    },
    {
        title: 'LABELS',
        children: [
            {
                title: 'Important',
                icon: 'fa fa-circle-o text-red',
                active: false,
                children: [],
                label: []
            },
            {
                title: 'Warning',
                icon: 'fa fa-circle-o text-yellow',
                active: false,
                children: [],
                label: []
            },
            {
                title: 'Information',
                icon: 'fa fa-circle-o text-aqua',
                active: false,
                children: [],
                label: []
            }
        ]
    }
]
export interface State {
    items: any[],
    activeItem: any;
}

export const initialState: State = {
    items: menus,
    activeItem: menus[0]
}



export function reducer(state: State = initialState, action: actions.Actions): State {
    switch (action.type) {
        default:
            return state;
    }
}


