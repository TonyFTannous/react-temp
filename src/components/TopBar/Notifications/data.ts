export type Tnotification = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  type: string;
  isRead: boolean;
};

export const notificationData: Tnotification[] = [
  {
    id: 1,
    title: 'Daily challenges',
    description: 'Your submission has been accepted',
    image: null,
    type: 'task',
    isRead: false
  },
  {
    id: 2,
    title: 'Mira Bou Alia',
    description:
      'Please be aware that we prefer your presence at the office every day',
    image: 'https://cdn.truelancer.com/user-picture/1043378-5d8a284744060.jpg',
    type: 'message',
    isRead: false
  },
  {
    id: 3,
    title: 'Mailbox',
    description: 'Your have 15 unread mails across 3 mailboxes',
    image: null,
    type: 'Mailbox',
    isRead: false
  },
  {
    id: 4,
    title: 'Nicolas khoury',
    description: 'added you to the new MLP Project group',
    image:
      'https://cdn.theorg.com/7728cf3b-d8c1-4265-84f1-721fb21b5031_thumb.jpg',
    type: 'message',
    isRead: false
  },
  {
    id: 5,
    title: 'Elias Al Ghazal',
    description: 'The issue of the pipeline has been solved',
    image: null,
    type: 'message',
    isRead: false
  },
  {
    id: 6,
    title: 'Go Langue',
    description:
      'Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but also has memory safety, garbage collection, structural typing, and CSP-style concurrency.',
    image:
      'https://media.licdn.com/dms/image/D4E03AQFzsw1VQyDCeg/profile-displayphoto-shrink_800_800/0/1668980989967?e=2147483647&v=beta&t=0SB5jETrUU-egQdsHMW0y8JvbasSL4XTrcUtcqCXVl4',
    type: 'message',
    isRead: false
  },
  {
    id: 7,
    title: 'Publishing',
    description: 'The new version is ready to publish',
    image: null,
    type: 'task',
    isRead: false
  }
];
