import TransactionType from '../data/entities/TransactionType';

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
