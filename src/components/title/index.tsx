interface IProps {
  content: string;
}

/**
 *
 * @description Thay đổi title của Page khi ở Client Page
 */

export function Title(props: IProps) {
  return <title>{props.content}</title>;
}
