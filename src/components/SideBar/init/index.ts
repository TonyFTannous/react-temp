import {
  FaHouse,
  FaMapPin,
  FaPalette,
  FaDiceD20,
  FaChartPie,
  FaSuitcase,
  FaPuzzlePiece,
  FaChartSimple,
  FaRegCalendar,
  FaRegFileLines
} from 'react-icons/fa6';

import Badge from '@/components/UI/Badge/Badge';

export type Telem = {
  type: string;
  title: string;
  to?: string;
  icon?: any;
  description?: string;
  suffix?: {
    node: any;
    variant: 'danger' | 'warning' | 'info' | 'success' | undefined;
    data: number;
  };
  children?: Telem[];
  disabled?: boolean;
  selected?: boolean;
};

const init: Telem[] = [
  {
    type: 'section',
    title: 'Dashboards',
    description: 'Section of dashboards'
  },
  {
    type: 'item',
    title: 'Project',
    to: '/',
    icon: FaHouse,
    selected: true
  },
  {
    type: 'item',
    title: 'Analytics',
    to: 'analytics',
    icon: FaChartPie
  },
  {
    type: 'section',
    title: 'General',
    description: 'Section of general topics'
  },
  {
    type: 'submenu',
    title: 'Charts',
    icon: FaChartSimple,
    suffix: {
      node: Badge,
      variant: 'danger',
      data: 10
    },
    children: [
      {
        type: 'item',
        title: 'Pie charts',
        to: '/'
      },
      {
        type: 'item',
        title: 'Line charts',
        to: '/'
      },
      {
        type: 'item',
        title: 'Bar charts',
        to: '/'
      }
    ]
  },
  {
    type: 'submenu',
    title: 'Maps',
    icon: FaMapPin,
    children: [
      {
        type: 'item',
        title: 'Google maps',
        to: '/'
      },
      {
        type: 'item',
        title: 'Open street maps',
        to: '/'
      }
    ]
  },
  {
    type: 'submenu',
    title: 'Theme',
    icon: FaPalette,
    children: [
      {
        type: 'item',
        title: 'Dark',
        to: '/'
      },
      {
        type: 'item',
        title: 'Light',
        to: '/'
      }
    ]
  },
  {
    type: 'submenu',
    title: 'Components',
    icon: FaDiceD20,
    children: [
      {
        type: 'item',
        title: 'Grid',
        to: '/'
      },
      {
        type: 'item',
        title: 'Layout',
        to: '/'
      },
      {
        type: 'submenu',
        title: 'Forms',
        children: [
          {
            type: 'item',
            title: 'Input',
            to: '/'
          },
          {
            type: 'item',
            title: 'Select',
            to: '/'
          },
          {
            type: 'submenu',
            title: 'More',
            children: [
              {
                type: 'item',
                title: 'CheckBox',
                to: '/'
              },
              {
                type: 'item',
                title: 'Radio',
                to: '/'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'submenu',
    title: 'E-commerce',
    icon: FaSuitcase,
    children: [
      {
        type: 'item',
        title: 'Product',
        to: '/'
      },
      {
        type: 'item',
        title: 'Orders',
        to: '/'
      },
      {
        type: 'item',
        title: 'Credit card',
        to: '/'
      }
    ]
  },
  {
    type: 'section',
    title: 'Extra',
    description: 'Section of extra topics'
  },
  {
    type: 'item',
    title: 'Calendar',
    to: '/',
    icon: FaRegCalendar
  },
  {
    type: 'item',
    title: 'Documentation',
    to: '/',
    icon: FaRegFileLines
  },
  {
    type: 'item',
    title: 'Examples',
    to: '/',
    icon: FaPuzzlePiece,
    disabled: true
  }
];

export default init;

// <div className={classes.elemBounceHover}>
//     <SideBarItem
//     title="Dashboard"
//     to="/"
//     icon={<FaHouse size={'1.2rem'} className={classes.icon} />}
//     selected={selected}
//     selectHandler={handleSelectMenuItem}
//     collapsed={isCollapsed}
//     />
//     <SideBarSection
//     title="General"
//     description="Section of general topics"
//     collapsed={isCollapsed}
//     />
//     <SubMenu
//     label="Charts"
//     icon={<FaChartSimple size={'1.2rem'} className={classes.icon} />}
//     suffix={<Badge variant="danger">10</Badge>}
//     className={`${isCollapsed ? 'sidebar-collapsed' : ''}`}
//     >
//     <SideBarItem
//         title="Pie charts"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     <SideBarItem
//         title="Line charts"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     <SideBarItem
//         title="Bar charts"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     </SubMenu>
//     <SubMenu
//     label="Maps"
//     icon={<FaMapPin size={'1.2rem'} className={classes.icon} />}
//     className={`${isCollapsed ? 'sidebar-collapsed' : ''}`}
//     >
//     <SideBarItem
//         title="Google maps"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     <SideBarItem
//         title="Open street maps"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     </SubMenu>
//     <SubMenu
//     label="Theme"
//     icon={<FaPalette size={'1.2rem'} className={classes.icon} />}
//     className={`${isCollapsed ? 'sidebar-collapsed' : ''}`}
//     >
//     <SideBarItem
//         title="Dark"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     <SideBarItem
//         title="Light"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     </SubMenu>
//     <SubMenu
//     label="Components"
//     icon={<FaDiceD20 size={'1.2rem'} className={classes.icon} />}
//     className={`${isCollapsed ? 'sidebar-collapsed' : ''}`}
//     >
//     <SideBarItem
//         title="Grid"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     <SideBarItem
//         title="Layout"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     <SubMenu label="Forms">
//         <SideBarItem
//         title="Input"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//         />
//         <SideBarItem
//         title="Select"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//         />
//         <SubMenu label="More">
//         <SideBarItem
//             title="CheckBox"
//             to="/"
//             selected={selected}
//             selectHandler={handleSelectMenuItem}
//         />
//         <SideBarItem
//             title="Radio"
//             to="/"
//             selected={selected}
//             selectHandler={handleSelectMenuItem}
//         />
//         </SubMenu>
//     </SubMenu>
//     </SubMenu>
//     <SubMenu
//     label="E-commerce"
//     icon={<FaSuitcase size={'1.2rem'} className={classes.icon} />}
//     className={`${isCollapsed ? 'sidebar-collapsed' : ''}`}
//     >
//     <SideBarItem
//         title="Product"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     <SideBarItem
//         title="Orders"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     <SideBarItem
//         title="Credit card"
//         to="/"
//         selected={selected}
//         selectHandler={handleSelectMenuItem}
//     />
//     </SubMenu>
//     <SideBarSection
//     title="Extra"
//     description="Section of extra topics"
//     collapsed={isCollapsed}
//     />
//     <SideBarItem
//     title="Calendar"
//     to="/"
//     selected={selected}
//     collapsed={isCollapsed}
//     selectHandler={handleSelectMenuItem}
//     icon={<FaRegCalendar size={'1.2rem'} className={classes.icon} />}
//     />
//     <SideBarItem
//     title="Documentation"
//     to="/"
//     selected={selected}
//     collapsed={isCollapsed}
//     selectHandler={handleSelectMenuItem}
//     icon={<FaRegFileLines size={'1.2rem'} className={classes.icon} />}
//     />
//     <SideBarItem
//     title="Examples"
//     to="/"
//     disabled
//     selected={selected}
//     collapsed={isCollapsed}
//     selectHandler={handleSelectMenuItem}
//     icon={<FaPuzzlePiece size={'1.2rem'} className={classes.icon} />}
//     />
// </div>
