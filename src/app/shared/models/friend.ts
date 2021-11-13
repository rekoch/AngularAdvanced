export interface Friend {
  name: string;
  status: 'invited' | 'accepted',
  email: string,
  isSelected?: boolean;
}
