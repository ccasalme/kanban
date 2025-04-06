import { UserData } from './UserData';

export interface TicketData {
  id: number | null;
  name: string;
  description: string;
  status: string;
  assignedUserId?: number;      // optional if no assignment
  assignedUser?: UserData;      // optional if not populated
}
