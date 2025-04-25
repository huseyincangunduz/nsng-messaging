export interface UserMessage {
  from: string;
  content: string;
  /**
   * ISOString or Js Date
   */
  date: string | Date;
}
