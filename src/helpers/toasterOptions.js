import { toast } from 'react-hot-toast';

export const errorToast = msg => {
  toast.error(msg, {
    position: 'bottom-right',
    duration: 2000,
    style: {
      background: '#ff7340',
      color: '#fff',
    },
  });
};
