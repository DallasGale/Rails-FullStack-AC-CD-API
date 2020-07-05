class Album < ApplicationRecord
  # belongs_to :parent, class_name: 'Album', foreign_key: :parent_id, optional: true
  validates :title, presence: true
end
