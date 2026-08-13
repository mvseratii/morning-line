/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Morning Line",
  url: "https://github.com/mvseratii/morning-line",
  description: `A hybrid SIM horse racing art game!`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "1PGC2UW27AoaDeu50H8xrCfsQ4EvedKzkCieIRtBVrYk",

  pages: {
    masterlist:    "masterlist",
    masterlistLog: "masterlist log",
    players:       "players",
    inventory:     "inventory",
    inventoryLog:  "inventory log",
    items:         "items",
    traits:        "traits",
    prompts:       "prompts",
    faq:           "faq",
    lineage:       "lineage",
    gallery:       "gallery",
    slots:         "slots",
    staff:         "mods",
  },

  experience: {
    toggle: true, // set this to "false" if you don't want to track experience!
    ranks: [ // you're free to change the ranks here
      [25, 'Quality Merit'],
      [75, 'Refined Merit'],
      [150, 'Superior Merit'],
      [250, 'Exemplary Merit'],
      [400, 'Noble Merit'],
      [425, 'Quality Pretige'],
      [475, 'Refined Prestige'],
      [550, 'Superior Prestige'],
      [650, 'Exemplary Prestige'],
      [800, 'Noble Prestige'],
      [1000, 'Hall Of Fame']
    ]
  },

  options: {

    designTypes: ['All', 'Official Design', 'Guest Design', 'MYO Slot', 'MYO Design'],
    statuses: ['All', 'Resell', 'Trade', 'Gift', 'Voided', 'For Sale', 'Purchased'],
    genders: ["Stallion", "Mare", "Gelding", "Mare (infertile)"],
    breeds: ["Loshenka"],
    slotStatutes: ['Available', 'Pending', 'Used', 'Relinquished'],
    rarity: ['All', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'],
    species: ['All', 'Dog', 'Cat', 'Bunny'],
    itemTypes: ['All', 'Currency', 'MYO Slot', 'Pet', 'Trait', 'Misc'],
    traitTypes: ['All', 'Ears', 'Eyes', 'Body', 'Limbs', 'Tails', 'Misc', 'Mutations']

  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};


/* Item Catalogue
/* --------------------------------------------------------------- */
charadex.page.items = {

  sheetPage: charadex.sheet.pages.items,
  sitePage: 'items',
  dexSelector: 'charadex',
  profileProperty: 'item',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: true,
  },

};


/* Traits
/* --------------------------------------------------------------- */
charadex.page.traits = {

  sheetPage: charadex.sheet.pages.traits,
  sitePage: 'traits',
  dexSelector: 'charadex',
  profileProperty: 'trait',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.traitTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.traitTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Trait', 'Rarity']
  },

  prevNext: {
    toggle: true,
  },

};


/* Prompts
/* --------------------------------------------------------------- */
charadex.page.prompts = {

  sheetPage: charadex.sheet.pages.prompts,
  sitePage: 'prompts',
  dexSelector: 'charadex',
  profileProperty: 'prompt',

  sort: {
    toggle: true,
    key: "enddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};


/* Staff
/* --------------------------------------------------------------- */
charadex.page.staff = {

  sheetPage: charadex.sheet.pages.players,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};


/* FAQ
/* --------------------------------------------------------------- */
charadex.page.faq = {

  sheetPage: charadex.sheet.pages.faq,
  sitePage: 'faq',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Question', 'Answer', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

}



/* Masterlist
/* --------------------------------------------------------------- */
charadex.page.masterlist = {

  sheetPage: charadex.sheet.pages.masterlist,
  sitePage: 'masterlist',
  dexSelector: 'charadex',
  profileProperty: 'design',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.designTypes,
      'Status': charadex.sheet.options.statuses,
      'Rarity': charadex.sheet.options.rarity,
      'gender': charadex.sheet.options.genders,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Breed',
    parameters: charadex.sheet.options.breeds,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Showname', 'Callname', 'Design', 'Owner', 'Designer', 'Artist', 'Traits']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.masterlistLog]: {

      sheetPage: charadex.sheet.pages.masterlistLog,
      primaryProperty: 'design',
      relatedProperty: 'design',
      dexSelector: 'log',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },

    [charadex.sheet.pages.lineage]: {

      sheetPage: charadex.sheet.pages.lineage,
      primaryProperty: 'id',
      relatedProperty: 'horse',
      dexSelector: 'lineaged',
      profileProperty: 'id',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "",
        order: "asc",
        parameters: []
      },

      pagination: {
        toggle: false,
        bottomToggle: false,
        amount: 12,
      },

    },


    [charadex.sheet.pages.gallery]: {

      sheetPage: charadex.sheet.pages.gallery,
      primaryProperty: 'id',
      relatedProperty: 'horse',
      dexSelector: 'gallery',
      profileProperty: 'id',
      profileToggle: true,
      sitePage: 'gallery',

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: true,
        amount: 6,
      },
    },

    [charadex.sheet.pages.slots]: {

      sheetPage: charadex.sheet.pages.slots,
      primaryProperty: 'id',
      relatedProperty: 'horse',
      dexSelector: 'slots',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "asc",
        parameters: []
      },

      pagination: {
        toggle: false,
        bottomToggle: true,
        amount: 6,
      },
    },

  }

};

/* Inventory
/* --------------------------------------------------------------- */
charadex.page.player = {

  // Dex Set Up
  sheetPage: charadex.sheet.pages.players,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  // Dex Options
  sort: {
    toggle: true,
    key: "username",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },


  // Related Data
  relatedData: {

    [charadex.sheet.pages.inventory]: {

      sheetPage: charadex.sheet.pages.inventoryLog,
      sitePage: 'inventories',
      primaryProperty: 'username',
      relatedProperty: 'username',
      dexSelector: 'inventory',
      profileProperty: 'username',
      profileToggle: false,

    },

    [charadex.sheet.pages.inventoryLog]: {

      sheetPage: charadex.sheet.pages.inventoryLog,
      sitePage: 'inventories',
      primaryProperty: 'username',
      relatedProperty: 'username',
      dexSelector: 'log',
      profileProperty: 'id',
      profileToggle: false,

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },
    

    [charadex.sheet.pages.masterlist]: {

      // This imports the config from the masterlist
      // So you dont have to repeat yourself
      ...charadex.page.masterlist, 

      sheetPage: charadex.sheet.pages.masterlist,
      sitePage: 'masterlist',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'designs',
      profileProperty: 'design',
      profileToggle: false,

    }

  },

  
  // This is a special config for their inventory
  inventoryConfig: {

    sheetPage: charadex.sheet.pages.items,
    sitePage: 'items',
    dexSelector: 'inventory',
    profileProperty: 'item',
    profileToggle: false,

    sort: {
      toggle: true,
      sortProperty: "item",
      order: "asc",
      parametersKey: 'type', 
      parameters: charadex.sheet.options.itemTypes
    },

    search: {
      toggle: true,
      filterToggle: false,
      parameters: ['Item']
    },

    filters: {
      toggle: true,
      parameters: {
        'Type': charadex.sheet.options.itemTypes,
        'Rarity': charadex.sheet.options.rarity,
      }
    },

  }

};

/* Slots
/* --------------------------------------------------------------- */
charadex.page.slots = {

  sheetPage: charadex.sheet.pages.slots,
  sitePage: 'slots',
  dexSelector: 'charadex',

  sort: {
    toggle: true,
    key: "timestamp",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 10,
  },

  filters: {
    toggle: true,
    parameters: {
      'Status': charadex.sheet.options.slotStatutes,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Timestamp', 'Horse Name', 'Owner']
  },

  prevNext: {
    toggle: false,
    text: '',
  },

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  prompts: {
    ... charadex.page.prompts,
    dexSelector: 'prompt',
    amount: 3,
  },

  staff: {
    ... charadex.page.staff,
    dexSelector: 'staff',
    amount: 6,
  },

  designs: {
    ... charadex.page.masterlist,
    dexSelector: 'design',
    amount: 4,
  },

  gallery: {
    ...charadex.page.gallery,
    dexSelector: 'artwork',
    amount: 4,
  },

};


export { charadex };