import React from "react";
import {
  Button,
  Confirm,
  useUpdateMany,
  useRefresh,
  useNotify,
  useUnselectAll
} from "react-admin";

const ResetViewsButton = ({ selectedIds }) => {
  const [open, setOpen] = React.useState(false);
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const [updateMany, { loading }] = useUpdateMany(
    "posts",
    selectedIds,
    { views: 0 },
    {
      onSuccess: () => {
        refresh();
        notify("Posts updated");
        unselectAll("posts");
      },
      onFailure: (error) => notify("Error: posts not updated", "warning")
    }
  );
  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    updateMany();
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button label="Reset Views" onClick={handleClick} />
      <Confirm
        isOpen={open}
        loading={loading}
        title="Update View Count"
        content="選択をクリアしますが、よろしいか？"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </React.Fragment>
  );
};
export default ResetViewsButton;
