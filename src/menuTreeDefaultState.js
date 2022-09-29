const menuTreeDefaultState = [
  {
    id: 1,
    name: "Menu Item 1",
    item: {
      menuId: "2925abad-d588-4901-a97f-0d292bb04ef4",
      pageName: "form/OHBCcHNTVlRoMjVvaFh3QmVOdG9wMzVDVm9MNTNkZlZhNktYNVpFTXZVV2JEa21JOXN6ZU84TmxTWDdkNXZJVw==",
      menuName: "Servicios chófer",
      iconId: 11,
      system: false,
      type: 1,
      optionType: 1,
      title: "PM - Servicios chófer",
      //TODO: añadir menutreeid
    },
    children: [
      {
        id: 11,
        name: "Menu Item 11",
        children: []
      },
      {
        id: 12,
        name: "Menu Item 12",
        children: [
          {
            id: 121,
            name: "Menu Item 121",
            children: []
          },
          {
            id: 122,
            name: "Menu Item 122",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Menu Item 2",
    children: []
  },
  {
    id: 4,
    name: "Menu Item 4",
    children: []
  },
  {
    id: 5,
    name: "Menu Item 5",
    children: []
  }
];

const defaultState2 = [
  {
    id: 4,
    name: "Menu Item 4",
    children: []
  },
  {
    id: 5,
    name: "Menu Item 5",
    children: []
  }
];

const defaultState3 = [
  {
    id: 4,
    name: "Menu Item 4",
    children: [
      {
        id: 41,
        name: "Menu Item 41",
        children: []
      },
      {
        id: 42,
        name: "Menu Item 42",
        children: [
          {
            id: 5,
            name: "Menu Item 5",
            children: []
          }
        ]
      }
    ]
  }
];

export default menuTreeDefaultState;
export const menuTreeEmptyState = [];