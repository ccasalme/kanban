import TicketCard from './TicketCard';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

interface SwimlaneProps {
  title: string;
  tickets: TicketData[];
  deleteTicket: (ticketId: number) => Promise<ApiMessage>;
}

const Swimlane = ({ title, tickets, deleteTicket }: SwimlaneProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Todo':
        return 'todo';
      case 'In Progress':
        return 'inprogress';
      case 'Done':
        return 'done';
      default:
        return '';
    }
  };

  return (
    <div className={`swimlane ${getStatusClass(title)}`}>
      <h2>{title}</h2>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            deleteTicket={deleteTicket}
          />
        ))
      ) : (
        <p className="empty-lane-msg">No tickets yet in this lane.</p>
      )}
    </div>
  );
};

export default Swimlane;
