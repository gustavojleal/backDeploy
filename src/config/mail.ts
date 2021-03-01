interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ses',

  defaults: {
    from: {
      email: 'support@rundev.ca',
      name: 'Easy KanBan Tecnical support',
    },
  },
} as IMailConfig;
