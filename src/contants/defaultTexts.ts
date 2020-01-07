const defaultTexts = {
  navigationMenu: {
    chains: 'Chains',
    habits: 'Habits',
    profile: 'Profile',
  },
  habits: {
    header: {
      title: 'My Habits',
    },
    item: {
      today: (isCompleted: boolean) => {
        const status = isCompleted ? 'complete' : 'incomplete';
        return `Today - ${status}`;
      },
      chain: (length: number) => `Chain - ${length} days`,
      menu: {
        mark: 'Complete today',
        unmark: 'Unmark today',
        edit: 'Edit',
        pause: 'Pause',
        delete: 'Delete',
      },
    },
  },
  profile: {
    header: {
      title: 'Profile',
    },
    stats: {
      total: {
        description: 'points received',
      },
      days: {
        subtitle: 'days',
        description: 'longest chain',
      },
    },
  },
};

export default defaultTexts;
