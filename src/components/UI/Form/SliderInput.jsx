import ReactSlider from "react-slider"
import styled from 'styled-components';

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #56687F;
  color: #fff;
  font-size: 12px;
  border-radius: 50%;
  cursor: grab;
  z-index: 0!important;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props => ( props.index === 2 ? '#fff' : props.index === 1 ? '#3498DB' : '#fff' )};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index}/>;

const SliderInput = (props) => {
   return (
      <StyledSlider
         renderTrack={Track}
         renderThumb={Thumb}
         {...props}
      />
   )
}

export default SliderInput
