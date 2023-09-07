export interface ITaskModel {
  label: string;
  description: string;
  start_date: string;
  end_date: string;
}

export interface ITaskListModel {
  tasks: ITaskModel[];
}
