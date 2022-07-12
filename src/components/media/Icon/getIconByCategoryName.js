export function getIconByCategoryName(category) {
  const list = {
    'Bills': 'description', 
    'Food': 'local_pizza',
    'Clothes': 'checkroom',
    'Transport': 'drive_eta',
    'Fun': 'videogame_asset',
    'Other': 'file_present',
    'feed': 'feed',
    'stats': 'trending_up',
    'settings': 'settings',
    'add': 'add',
    'remove': 'remove'
  } 

  return list[category]
}