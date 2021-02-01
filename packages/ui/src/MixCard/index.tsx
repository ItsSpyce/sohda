import { Mix } from 'sohda-api';
import Card from 'react-bootstrap/Card';

type MixCardProps = {
  mix: Mix;
  onClick: (mix: Mix) => boolean;
};

const MixCard = (props: MixCardProps) => (
  <Card>
    <Card.Img
      src={`data:image/${props.mix.imageType};base64,${props.mix.encodedImage}`}
    />
  </Card>
);
