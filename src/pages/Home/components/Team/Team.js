import Card from '../../../../components/Card/Card';
import member1 from '../../../../components/assets/images/member1.jpg';
import member2 from '../../../../components/assets/images/member2.jpg';
import member3 from '../../../../components/assets/images/member3.jpg';
import member4 from '../../../../components/assets/images/member4.png';
import member5 from '../../../../components/assets/images/member5.png';
import './Team.style.scss';

function Team() {
  const members = [
    {
      avatar: member1,
      name: 'Mohan C M',
      role: 'Founder & Core Developer',
    },
    {
      avatar: member2,
      name: 'Iacob Ionut',
      role: 'UI/UX & Core Developer',
    },
    {
      avatar: member3,
      name: 'Manish Bajpai',
      role: 'UI/UX Designer & Developer',
    },
    {
      avatar: member4,
      name: 'ririxi',
      role: 'Backend Website Developer',
    },
    {
      avatar: member5,
      name: 'Honorable Mentions',
      role: `Click here to see them!`,
    },
  ];

  return (
    <section className='team'>
      <div className='container'>
        <h2 className='heading-xl'>
          Meet our <span className='text-primary'>team</span>
        </h2>
        <div className='team-wrapper'>
          {members.map((member) => (
            <Card>
              <div className='member-img'>
                <img src={member.avatar} alt={member.name} />
              </div>
              <div className='member-text'>
                <div className='member-name'>{member.name}</div>
                <div className='member-role'>{member.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
