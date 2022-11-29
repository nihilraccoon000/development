import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';

function ConditionBar({sortType, skillType, cardType, changeSortType, changeCardType, changeSkillType}) {
    const sortMethods = [
        { name: 'Rarity(Star)', value: 'rarity' },
        { name: 'Release', value: 'release' },
    ]; 
    const cardTypes = [
        "all", "cute", "happy", "pure", "cool", "mysterious"
    ];
    const skillTypes = [
        "all", "score", "accuracy", "life"
    ];

    return (
      <>
        <b>Sort By: &nbsp;&nbsp;</b>
        <ButtonGroup className="mb-2">
            {sortMethods.map((sortMethod, idx) => (
            <ToggleButton
                id={`radio-${idx}`}
                type="radio"
                variant="outline-secondary"
                value={sortMethod.value}
                checked={sortType === sortMethod.value}
                onChange={(e) => changeSortType(e.currentTarget.value)}
            >
                {sortMethod.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
        
        <p>
            <Form>
            <b>Type: &nbsp;&nbsp;</b>
                {cardTypes.map((cardtype) => (
                    <Form.Check 
                    inline
                    label={cardtype}
                    value={cardtype}
                    name="group1"
                    type='radio'
                    checked={cardtype === cardType}
                    onChange={(e) => changeCardType(e.currentTarget.value)}
                    />
                ))}
            </Form>
        </p>
        <p>
            <Form>
            <b>Skill Type:&nbsp;&nbsp;</b>
                {skillTypes.map((skilltype) => (
                    <Form.Check 
                    inline
                    label={skilltype}
                    value={skilltype}
                    name="group2"
                    type='radio'
                    checked={skilltype === skillType}
                    onChange={(e) => changeSkillType(e.currentTarget.value)}
                    />
                ))}
            </Form>
        </p>
      </>
    );
  }
  
export default ConditionBar;