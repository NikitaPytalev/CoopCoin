import { TransactionType } from '../data/enums/TransactionType';

interface TransactionPayload {
  id: string;
  amount: number;
  reason: string;
  comment?: string;
  type: TransactionType;
  srcUserId: string;
  destUserId: string;
}

export default TransactionPayload;
